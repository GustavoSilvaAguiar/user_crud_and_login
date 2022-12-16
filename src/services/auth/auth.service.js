import {
  getAuth,
  signOut,
  deleteUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
//import { addDoc, collection, getFirestore } from "firebase/firestore";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import firebaseApp from "@/firebase";

class AuthServices {
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.db = getFirestore(firebaseApp);
  }
  getAuth(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  postNewUser(email, password) {
    const newUser = createUserWithEmailAndPassword(this.auth, email, password);
    return newUser;
  }

  /**
   * Método para salvar dados do usuario logado
   * @param uid parametro que deve receber o retorno de this.$localStorageGetItem()
   * @param payload dados a serem salvos
   */
  async postUserData(uid, payload) {
    const response = await setDoc(doc(this.db, "users", `${uid}`), payload);
    return response;
  }

  async logout() {
    return await signOut(this.auth);
  }

  async deleteUser() {
    const user = this.auth.currentUser;
    return await deleteUser(user);
  }
}

export default new AuthServices();
