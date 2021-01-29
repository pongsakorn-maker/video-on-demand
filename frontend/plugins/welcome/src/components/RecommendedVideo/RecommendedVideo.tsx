import React, { FC, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import VideoCard from '../VideoCard';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';
import { EntVideo } from '../../services';
import { DefaultApi } from '../../services/apis';



const RecommendedVideo: FC<{}> = () => {
 const http = new DefaultApi();
// const [videos, setVideos] = useState(Array);
const [videos, setVideos] = React.useState<EntVideo[]>([]);
const [loading, setLoading] = useState(true);

const getViedos = async () => {
  const res = await http.listVideo({ limit: 4, offset: 0 });
  setLoading(false);
  setVideos(res);
  console.log(res);
};

useEffect(() => {
  getViedos();
}, [loading]);


  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Video On Demand" />
        <Content>
          <Grid container>
            {videos.map(item => {
                    return (
                      <VideoCard key={item.id} title={`${item.title}`} chanel={''} watched={10} url={`/watch`} imgsrc={`${item.imgurl}`} src={`${item.url}`}>
                      </VideoCard>
                    );
                  })}
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};

export default RecommendedVideo;
