import TranslationInput from "@/components/TranslationsInput";
import LanguageSelector from "@/components/LanguageSelector";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className="title">My translation App</h1>
        <div className={styles.inputContainer}>
          <TranslationInput id="nombre" type="text" dataTranslateKey="full_name_field" />
          <TranslationInput id="nombre" type="text" dataTranslateKey="email_field" />
          <TranslationInput id="nombre" type="text" dataTranslateKey="password_field" />
          <TranslationInput id="nombre" type="text" dataTranslateKey="confirm_password_field" />
          <TranslationInput id="nombre" type="text" dataTranslateKey="submit_button" />
        </div>
      </div>

      <div className={styles.center}>
        <LanguageSelector />
      </div>
    </main>
  );
}
