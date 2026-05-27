import { appConfig } from "@/lib/app-config";

export function PhoneFrame() {
  return (
    <div className="phone-stage" aria-label="No Contact app home screen">
      <div className="phone-frame">
        <div className="phone-screen">
          <img
            src={appConfig.screenshotPath}
            alt="No Contact home screen showing a streak tracker and daily check-in."
          />
        </div>
      </div>
    </div>
  );
}
