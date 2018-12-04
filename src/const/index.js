export const TOP_LIST = 'TOP_LIST';
export const NEW_LIST = 'NEW_LIST';
export const SHOW_LIST = 'SHOW_LIST';
export const ASK_LIST = 'ASK_LIST';
export const JOB_LIST = 'JOB_LIST';

export const STORY = 'STORY';

export const STORY_TYPES = {
  newest: {
    apiEndpointPrefix: 'new',
    actionName: NEW_LIST,
    stateDataKeyName: 'newest',
  },
  top: {
    apiEndpointPrefix: 'top',
    actionName: TOP_LIST,
    stateDataKeyName: 'news',
  },
  ask: {
    apiEndpointPrefix: 'ask',
    actionName: ASK_LIST,
    stateDataKeyName: 'ask',
  },
  show: {
    apiEndpointPrefix: 'show',
    actionName: SHOW_LIST,
    stateDataKeyName: 'show',
  },
  jobs: {
    apiEndpointPrefix: 'job',
    actionName: JOB_LIST,
    stateDataKeyName: 'jobs',
  }
}
