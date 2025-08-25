import DecryptedText from "@/components/ui/decrypted-text"

export function ProfileInfo() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl tracking-wider text-white drop-shadow-lg md:text-5xl font-mono font-semibold">
        <DecryptedText
          text="SAURABH"
          speed={80}
          maxIterations={15}
          sequential={true}
          revealDirection="center"
          useOriginalCharsOnly={false}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
          className="text-white"
          encryptedClassName="text-white/60"
          animateOn="view"
        />
      </h1>
      <p className="mx-auto max-w-md text-lg text-white/80 md:text-xl">
        From debugging code to boss battles – let's connect!
      </p>
    </div>
  )
}
