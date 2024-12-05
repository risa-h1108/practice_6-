import React from "react";
import { useForm } from "react-hook-form";
import classes from "../styles/Contact.module.css";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      console.log("送信できました", result);
      alert("送信しました");
      reset();
    } catch (error) {
      console.log("送信エラー", error);
      alert("送信エラーです");
    }
  };

  return (
    <>
      <div>
        {/* 通常、フォームのバリデーションや送信時の処理を管理するための関数
       onSubmitは、フォームが送信されたときに呼び出されるイベントハンドラーを指定する
       handleSubmit(onSubmit)の(onSubmit)で呼び出している*/}
        <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={classes.title}>問い合わせフォーム</h1>
          <div className={classes.itemWrapper}>
            <label className={classes.itemLabel}>お名前</label>
            <div className={classes.textWrapper}>
              <input
                className={classes.input}
                type="text"
                {...register("name", {
                  required: "お名前は必須です。",
                  maxLength: {
                    value: 30,
                    message: "お名前は30文字以内で入力してください。",
                  },
                })}
                disabled={isSubmitting}
              />

              {errors.name && (
                <p className={classes.error}>{errors.name?.message}</p>
              )}
            </div>
          </div>

          <div className={classes.itemWrapper}>
            <label className={classes.itemLabel}>メールアドレス</label>
            <div className={classes.textWrapper}>
              <input
                className={classes.input}
                type="email"
                {...register("email", {
                  required: "メールアドレスは必須です。",
                  pattern: {
                    value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i, //正規表現で、メールアドレスの形式を定義している。
                    message: "正しいメールアドレスを入力してください。",
                  },
                })}
                //送信中には入力やボタンを無効化する
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className={classes.error}>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className={classes.itemWrapper}>
            <label className={classes.itemLabel}>本文</label>
            <div className={classes.textWrapper}>
              <textarea
                className={classes.input}
                rows={8} //rows={8}は、テキストエリアの高さを8行分に設定しています。
                {...register("message", {
                  required: "本文は必須です。",
                  maxLength: {
                    value: 500,
                    message: "本文は500文字以内で入力してください。",
                  },
                })}
                //送信中には入力やボタンを無効化する
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className={classes.error}>{errors.message.message}</p>
              )}
            </div>
          </div>

          <div className={classes.buttonWrapper}>
            <button
              className={classes.send}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "送信中" : "送信"}
            </button>

            <button
              className={classes.clear}
              //type="button":このボタンが通常のボタンであることを示す
              type="button"
              //ボタンがクリックされたときに`reset()`という関数を呼び出す.フォームをリセットする
              onClick={() => reset()}
              //送信中はtype="button" のボタンも無効化
              disabled={isSubmitting}
            >
              クリア
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
