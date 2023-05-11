import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';

import type { BuildOptions } from '../types';

export const plugins = ({ paths }: BuildOptions): WebpackPluginInstance[] => [
  new ProgressPlugin(),
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    chunkFilename: 'css/[name].[contenthash:8].css',
    filename: 'css/[name].[contenthash:8].css',
  }),
];
