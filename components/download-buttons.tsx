import { appConfig } from "@/lib/app-config";

type DownloadButtonsProps = {
  className?: string;
};

export function DownloadButtons({ className }: DownloadButtonsProps) {
  return (
    <div className={className ? `download-row ${className}` : "download-row"}>
      <a className="store-button store-button-primary" href={appConfig.iosUrl}>
        Download on the App Store
      </a>
      <a
        className="store-button store-button-secondary"
        href={appConfig.androidUrl}
      >
        Get it on Google Play
      </a>
    </div>
  );
}
