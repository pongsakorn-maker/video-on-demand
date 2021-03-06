import React, { useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';
import { ZoomableVideo, Zoomable } from 'react-zoomable-media';

const Video = ({
  videoRef,
  isPlay,
  togglePlay,
  url,
}: {
  url: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlay: boolean;
  togglePlay: () => void;
}) => {
  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Video On Demand" />
        <Content>
          <Grid container>
            <div
              style={{
                width: 1280,
                height: 720,
                marginBottom: 150,
                backgroundColor: '#000000',
              }}
            >
              <ZoomableVideo
                render={({ onMediaReady }) => {
                  return (
                    <video
                      autoPlay
                      controls
                      muted
                      onLoadedMetadata={() => onMediaReady(videoRef)}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      ref={videoRef}
                      src={url}
                    />
                  );
                }}
              ></ZoomableVideo>
              <h1>Here is a video name</h1>
              <p>Here is a video description</p>
            </div>
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};
export type WatchProps = {
  src: string;
};
function Watch({ src }: WatchProps) {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const togglePlay = () => {
    const video = videoRef.current as HTMLVideoElement;
    setIsPlay(!isPlay);
    if (isPlay) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <Zoomable
      enable
      maxZoom={4}
      moveStep={50}
      wheelZoomRatio={0.1}
      zoomStep={10}
    >
      <div
        style={{
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Video
          isPlay={isPlay}
          togglePlay={togglePlay}
          videoRef={videoRef}
          url={
            'https://storage.cloud.google.com/video-on-demand-sut/Might%E2%81%BAU.mp4'
          }
        />
      </div>
    </Zoomable>
  );
}

export default Watch;
