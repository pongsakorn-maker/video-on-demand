import React, { FC } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
import Navbar from '../Navbar';

const Profile: FC<{}> = () => {
  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Navbar title="Profile" />
        <Content>
          <Grid container>
            <Typography>Profile</Typography>
          </Grid>
        </Content>
      </Page>
    </SidebarPage>
  );
};

export default Profile;
