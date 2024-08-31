"use client";

import { useState, FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import signIn from "../../services/firebase/auth/signIn";
import { useRouter } from "next/navigation";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleForm = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const { result, error } = await signIn(email, password);

            if (error) {
                const FirebaseError = error as FirebaseError;
                if (FirebaseError.message) {
                    console.log(FirebaseError.message);
                    throw new Error(FirebaseError.message);
                } else {
                    console.log("Unknown Error:", FirebaseError);
                    throw new Error("Unknown Error");
                }
            }
            console.log(result);
            return router.push("/");
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
      <div className="mt-40 bg-gray-900 flex flex-col justify-center items-center">
      <section className="bg-gray-900 border text-white p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <label htmlFor="email" className="block">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:border-white"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password" className="block">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 rounded border border-gray-700 bg-gray-900 focus:outline-none focus:border-white"
              placeholder="password"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gray-700 border hover:text-black hover:border-black hover:bg-gray-300 transition text-white font-bold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
    );
}

export default SignIn;