import { doc, getDoc, getFirestore, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseApp from "@/firebase";

class HomepageServices {
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.db = getFirestore(firebaseApp);
  }

  async getUserData(uid) {
    const docRef = doc(this.db, "users", uid);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  }
  /**
   * Metodo que deleta os dados do documento do usuario
   * @param uid id da conta do usuário logado
   */
  async deleteUserData(uid) {
    return await deleteDoc(doc(this.db, "users", uid));
  }
}

export default new HomepageServices();
