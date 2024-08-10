import SmallProjCard from "./SmallProjCard";
import { ProjectsItems } from "../../utils/constants";

function SmallProjContainer() {
  return (
    <>
      <div className="smallprojcontainer">
        <SmallProjCard
          Tech="JS"
          Name="Grid Lights"
          Details={ProjectsItems.ProjS1}
        />
        <SmallProjCard
          Tech="JS"
          Name="EMI Calculator"
          Details={ProjectsItems.ProjS2}
        />
        <SmallProjCard
          Tech="JS"
          Name="Stopwatch"
          Details={ProjectsItems.ProjS3}
        />
        <SmallProjCard
          Tech="React"
          Name="Crypto Currency Tracker"
          Details={ProjectsItems.ProjS4}
        />
        <SmallProjCard
          Tech="React"
          Name="Weather App - PWA"
          Details={ProjectsItems.ProjS5}
        />
        <SmallProjCard
          Tech="React"
          Name="Currency Converter"
          Details={ProjectsItems.ProjS6}
        />
        <SmallProjCard
          Tech="Next"
          Name="Web Scrapper"
          Details={ProjectsItems.ProjS7}
        />
      </div>
    </>
  );
}

export default SmallProjContainer;
