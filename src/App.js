import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Dropdown } from "./dropdowns/dropdown-3/Dropdown";

import '@splidejs/react-splide/css';
function App() {
  const options = {
    type: 'slide',
    perPage: 2,
    gap: '1rem',
    rewind: true,
    autoplay: true,
  };

  return (
    <div className="App">
      <Splide options={options}>
        <SplideSlide>
          <img src="https://placekitten.com/800/600" alt="Kitten 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/801/600" alt="Kitten 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/802/600" alt="Kitten 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/803/600" alt="Kitten 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://placekitten.com/804/600" alt="Kitten 5" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;