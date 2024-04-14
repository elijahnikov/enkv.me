import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Map({ location }: { location: string }) {
  return (
    <GoogleMapsEmbed
      apiKey="XYZ"
      height={200}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    />
  );
}
