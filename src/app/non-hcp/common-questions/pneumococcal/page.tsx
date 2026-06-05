import {
  createNonHcpCommonQuestionsTopicPage,
  createNonHcpTopicMetadata,
} from '@/components/non-hcp-common-questions/createNonHcpCommonQuestionsTopicPage';
import { NCQ_TOPICS } from '@/data/non-hcp-common-questions-topics';

const config = NCQ_TOPICS.pneumococcal;

export const metadata = createNonHcpTopicMetadata(config, '/non-hcp/common-questions/pneumococcal');
export default createNonHcpCommonQuestionsTopicPage(config);
