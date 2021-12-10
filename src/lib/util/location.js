/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  width: 100%;
  height: 48rem;
  @media (max-width: 960px) {
    height: 30rem;
  }
`;

const Location = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.526388766423196, 126.96691062863445),
      level: 3,
    };

    let map = new kakao.maps.Map(container, options);
    map.setZoomable(false);

    let markerPosition = new kakao.maps.LatLng(
      37.526388766423196,
      126.96691062863445
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <StyledMap id="map"></StyledMap>
    </div>
  );
};

export default Location;
