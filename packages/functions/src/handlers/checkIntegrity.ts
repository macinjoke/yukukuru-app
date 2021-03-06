import { QueueTypeCheckIntegrityData } from '@yukukuru/types';
import { firestore } from '../modules/firebase';
import { addQueuesTypeCheckIntegrity } from '../utils/firestore/queues/addQueuesTypeCheckIntegrity';
import { getGroupFromTime } from '../utils/group';
import { PubSubOnRunHandler } from '../types/functions';
import { log } from '../utils/log';

/**
 * 整合性チェックのキューを作成
 *
 * 12分ごとに 1グループずつ実行
 * 1日に 120回実行
 * ユーザーごとに 1日1回 整合性をチェック
 */
export const checkIntegrityHandler: PubSubOnRunHandler = async () => {
  const now = new Date(Math.floor(new Date().getTime() / (60 * 1000)) * 60 * 1000);
  const group = getGroupFromTime(12, now);

  // 1日前
  const yesterday = new Date(now.getTime() - 23 * 60 * 60 * 1000);

  const users = firestore
    .collection('users')
    .where('active', '==', true)
    .where('lastUpdatedCheckIntegrity', '<', yesterday)
    .where('group', '==', group)
    .get();

  const usersSnap = await users;

  const ids: string[] = usersSnap.docs.map((doc) => doc.id);
  log('checkIntegrity', '', { ids, count: ids.length });

  const items: QueueTypeCheckIntegrityData['data'][] = ids.map((id) => ({ uid: id }));
  await addQueuesTypeCheckIntegrity(items);
};
