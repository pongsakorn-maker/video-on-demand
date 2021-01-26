import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import VideoCard from '../VideoCard';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';

const RecommendedVideo: FC<{}> = () => {
  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Video" />
        <Content>
          <Grid container>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 1'}
              chanel={'Anime'}
              watched={10}
              url="/watch"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 2'}
              chanel={'Anime'}
              watched={101}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 3'}
              chanel={'Anime'}
              watched={1010}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 4'}
              chanel={'Anime'}
              watched={10101}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 5'}
              chanel={'Anime'}
              watched={101010}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 6'}
              chanel={'Anime'}
              watched={1010101}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 7'}
              chanel={'Anime'}
              watched={10101010}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 8'}
              chanel={'Anime'}
              watched={101010100}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 9'}
              chanel={'Anime'}
              watched={102}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 10'}
              chanel={'Anime'}
              watched={1020}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 11'}
              chanel={'Anime'}
              watched={10202}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
            <VideoCard
              title={'ดาบพิฆาตอสูร EP ที่ 12'}
              chanel={'Anime'}
              watched={1020220}
              url="https://www.youtube.com/watch?v=P-uhgIzHYYo&ab_channel=MelodicStar"
            ></VideoCard>
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};

export default RecommendedVideo;
