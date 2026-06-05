import {
  createNonHcpCommonQuestionsTopicPage,
  createNonHcpTopicMetadata,
} from '@/components/non-hcp-common-questions/createNonHcpCommonQuestionsTopicPage';
import { NCQ_TOPICS } from '@/data/non-hcp-common-questions-topics';

const config = NCQ_TOPICS.mmr;

export const metadata = createNonHcpTopicMetadata(config, '/non-hcp/common-questions/mmr');
export default createNonHcpCommonQuestionsTopicPage(config);
