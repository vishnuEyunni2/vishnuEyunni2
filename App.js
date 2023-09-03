import React from "react";
import ErrorBoundary from './src/ErrorBoundary/ErrorBoundary';
import Header from "./src/Header/Header";
import BaseLayout from "./src/Layout/BaseLayout";
import ContentLayout from "./src/Layout/ContentLayout";


function App() {

  return (
    <ErrorBoundary>
      <BaseLayout enableBgr={true} bgrUrl='../../Public/assets/grungepattern.jpg'>
        <ContentLayout />
      </BaseLayout>
    </ErrorBoundary>
  )
}

export default App;
