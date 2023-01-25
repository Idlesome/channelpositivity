import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ComingSoon.module.css";
import Head from "next/head";

export function ComingSoon() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sourceMp4Ref = useRef<HTMLSourceElement>(null);
  const sourceWebmRef = useRef<HTMLSourceElement>(null);
  useEffect(() => {
    if (!sourceMp4Ref.current || !sourceWebmRef.current || !videoRef.current)
      return;
    const lazyLoaded =
      sourceMp4Ref.current.src === sourceMp4Ref.current.dataset.src;
    if (lazyLoaded) return;

    sourceMp4Ref.current.src = sourceMp4Ref.current.dataset.src ?? "";
    sourceWebmRef.current.src = sourceWebmRef.current.dataset.src ?? "";

    videoRef.current.load();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Channel Positivity</title>
        <meta
          name="description"
          content="Channel Positivity is here to bring original experiences to YouTube to help you develop spiritually and channel your positivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "177.77777778vh",
          minWidth: "100%",
          height: "100%",
          minHeight: "56.25vw",
          zIndex: 1,
        }}
      >
        <source
          ref={sourceMp4Ref}
          data-src="/background.mp4"
          type="video/mp4"
        />
        <source
          ref={sourceWebmRef}
          data-src="/background.webm"
          type="video/webm"
        />
      </video>

      <main className={styles.main}>
        <div
          style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.4)", height: "64px" }}
        >
          <Image
            src="/logo.png"
            alt="Channel Positivity Logo"
            width={64}
            height={64}
          />
        </div>
        <br />
        <h1 className={styles.title}>Coming Soon...</h1>
        <div
          style={{
            position: "absolute",
            bottom: "4rem",
            right: "4rem",
          }}
        >
          <a
            href="https://www.youtube.com/c/ChannelPositivity"
            rel="noreferrer"
            target="_blank"
          >
            YouTube
          </a>
          &nbsp; &nbsp;
          <a
            href="https://open.spotify.com/artist/2LFhC8vqTukDcbxa3xRJnh"
            rel="noreferrer"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      </main>
    </div>
  );
}
