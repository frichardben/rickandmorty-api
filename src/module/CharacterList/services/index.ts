import { api } from "../../../core/api";



export class CharacterService {
  static getAllCharacter() {
    return api.get('character')
  }
}

