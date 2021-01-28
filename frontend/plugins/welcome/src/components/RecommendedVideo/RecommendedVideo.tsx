import React, { FC, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import VideoCard from '../VideoCard';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';

// const [videos, setVideos] = useState(Array);

// const [loading, setLoading] = useState(true);

// const getViedos = async () => {
//   const res = await api.listVideo({ limit: 10, offset: 0 });
//   setLoading(false);
//   setVideos(res);
// };

// useEffect(() => {
//   getViedos();
// }, [loading]);

const RecommendedVideo: FC<{}> = () => {
  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Video On Demand" />
        <Content>
          <Grid container>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 1'}
              chanel={'Anime'}
              watched={10}
              url="/watch"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 1'}
              chanel={'Anime'}
              watched={10}
              url="/watch"
            ></VideoCard>
            {/* {videos.map(item => (
              <VideoCard
                title={'ดาบพิฆาตอสูร EP ที่ 1'}
                chanel={'Anime'}
                watched={10}
                url="/watch"
              ></VideoCard>
            ))} */}
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};

export default RecommendedVideo;
