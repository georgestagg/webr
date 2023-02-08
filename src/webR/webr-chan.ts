import { Message } from './chan/message';
import { UUID as ShelterID } from './chan/task-common';
import { WebRPayloadPtr } from './payload';

export { isUUID as isShelterID, UUID as ShelterID } from './chan/task-common';

export interface EvalRMessage extends Message {
  type: 'evalR';
  data: {
    code: string;
    env?: WebRPayloadPtr;
    shelter: ShelterID;
  };
}

export interface NewShelterMessage extends Message {
  type: 'newShelter';
}

export interface ShelterMessage extends Message {
  type: 'shelterPurge' | 'shelterSize';
  data: ShelterID;
}

export interface ShelterDestroyMessage extends Message {
  type: 'shelterDestroy';
  data: { id: ShelterID; obj: WebRPayloadPtr };
}
