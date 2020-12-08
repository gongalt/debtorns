import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async setItem(data) {
    await Storage.set(data);
  }

  async getItem(key) {
    const { value } = await Storage.get({ key });
    console.log("Got item: ", value);
    return JSON.parse(value);
  }

  async removeItem(key) {
    await Storage.remove({ key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    console.log("Got keys: ", keys);
  }

  async clear() {
    await Storage.clear();
  }
}
