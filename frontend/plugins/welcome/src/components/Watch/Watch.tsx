import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';
import {
  ZoomableVideo,
  Zoomable,
  zoomableContext,
  ZoomableContextType,
} from 'react-zoomable-media';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    flexGrow: 1,
  },
}));

const Video = ({
  videoRef,
  isPlay,
  togglePlay,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlay: boolean;
  togglePlay: () => void;
}) => {
  const { cropImage } = useContext(zoomableContext) as ZoomableContextType;
  const [imageData, serImageData] = useState<string>('');

  const onClickHandler = () => {
    cropImage((imageData: string) => {
      serImageData(imageData);
    });
  };

  const downloadImage = () => {
    const link = document.createElement('a');

    link.setAttribute('href', imageData);
    link.setAttribute('download', 'Cropped Image');
    link.click();
  };

  const classes = useStyles();

  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Profile" />
        <Content>
          <Grid container>
          <div style={{ width: 1280, height: 720, marginBottom: 150 }}>
            <ZoomableVideo
              render={({ onMediaReady }) => {
                return (
                  <video
                    controls
                    crossOrigin="anonymous"
                    onLoadedMetadata={() => onMediaReady(videoRef)}
                    style={{
                      height: 'auto',
                      width: '100%',
                    }}
                    ref={videoRef}
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  />
                );
              }}
            ></ZoomableVideo>
            <div className={classes.button}>
              {/* <button onClick={togglePlay}>{isPlay ? 'Pause' : 'Play'}</button> */}
              <Button
                variant="contained"
                color="primary"
                onClick={onClickHandler}
              >
                Crop Image
              </Button>
              {/* <button onClick={onClickHandler}>Crop Image</button> */}
              {imageData && (
                <>
                  <img
                    style={{ width: 1280, height: 720, objectFit: 'contain' }}
                    src={imageData}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={downloadImage}
                  >
                    Download Cropped Image
                  </Button>
                </>
              )}
            </div>
            </div>
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};

const Watch = () => {
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
        <Video isPlay={isPlay} togglePlay={togglePlay} videoRef={videoRef} />
      </div>
    </Zoomable>
  );
};

export default Watch;
