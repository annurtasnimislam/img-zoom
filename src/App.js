import ZoomImage from "./components/ZoomImage";

const App = () => {
  return (
    <div>
      <h1>Hover over the image to zoom</h1>
      <ZoomImage src="your-image-url.jpg" alt="Zoomable Image" />
    </div>
  );
};

export default App;
