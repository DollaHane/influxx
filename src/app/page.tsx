import Image from "next/image";
import influxx from "@/app/assets/influxx.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/vDQf5YR9i7ajbhskvc9N"
            className="mt-10 w-full h-full border border-transparent"
            id="inline-vDQf5YR9i7ajbhskvc9N"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="526"
            data-layout-iframe-id="inline-vDQf5YR9i7ajbhskvc9N"
            data-form-id="vDQf5YR9i7ajbhskvc9N"
            title="Form 0"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
    </main>
  );
}
