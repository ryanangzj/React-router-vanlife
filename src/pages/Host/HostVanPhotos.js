import { useOutletContext } from "react-router-dom";

export function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <img src={currentVan.imageUrl} className="host-van-detail-image" alt="" />
    </div>
  );
}
