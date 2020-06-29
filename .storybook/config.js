import React from "react";
import { configure, addDecorator } from "@storybook/react";
import "./addons";
import "common/global-styles.scss";
import { ApplicationProviders } from "core/containers/ApplicationProviders";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

addDecorator((story, ctx) => (
  <ApplicationProviders>{story(ctx)}</ApplicationProviders>
));

function loadStories() {
  requireAll(require.context("../src", true, /\.story\.(jsx?|tsx?)$/));
}

configure(loadStories, module);
