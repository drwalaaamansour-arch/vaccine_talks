import {
  createNonHcpCommonQuestionsTopicPage,
  createNonHcpTopicMetadata,
} from '@/components/non-hcp-common-questions/createNonHcpCommonQuestionsTopicPage';
import { NCQ_TOPICS } from '@/data/non-hcp-common-questions-topics';

const config = NCQ_TOPICS.rsv;

export const metadata = createNonHcpTopicMetadata(config, '/non-hcp/common-questions/rsv');
export default createNonHcpCommonQuestionsTopicPage(config);
