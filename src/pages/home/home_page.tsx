import { EuiPage, EuiPageBody } from '@elastic/eui';
import React from 'react';
import { HomePartOne } from './home_part_one';
import { HomePartTwo } from './home_part_two';
import { HomePartThree } from './home_part_three';
import { HomePartFour } from './home_part_four';

/**
 * `HomePage` represents the home page for the entire site.
 *
 * This page is a long listing of various services offered to make navigating
 * the site easiest for end users.
 */
export const HomePage: React.VFC = () => {
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody component="div">
        <HomePartOne />
        <HomePartTwo />
        <HomePartThree />
        <HomePartFour />
      </EuiPageBody>
    </EuiPage>
  );
};
