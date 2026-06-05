import {
  createNonHcpCommonQuestionsTopicPage,
  createNonHcpTopicMetadata,
} from '@/components/non-hcp-common-questions/createNonHcpCommonQuestionsTopicPage';
import { NCQ_TOPICS } from '@/data/non-hcp-common-questions-topics';

const config = NCQ_TOPICS.generalQuestions;

export const metadata = createNonHcpTopicMetadata(config, '/non-hcp/common-questions/general-questions');
export default createNonHcpCommonQuestionsTopicPage(config);
