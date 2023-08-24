import { colord } from 'colord';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ColorResults } from './components/ColorResults';
import { Stack } from './components/Common';
import { SearchBar } from './components/SearchBar';
import { API } from './config';
import useDebounce from './hooks/useDebounce';
import { ColorApiResponse, ColorData } from './util/types';
import { colorDistance, generateRGBHSL } from './util/utils';

const App = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [color, setColor] = useState('');

  const searchColor = useDebounce(color);
  const { data: rawColors, error } = useSWR(
    API,
    async (url: string) => {
      const res = await fetch(url);
      const data = (await res.json()) as ColorApiResponse;
      // Add hsl and rgb data
      const colorData = generateRGBHSL(data.colors);

      // Set color group only if its empty (error or initial fetch)
      if (colors.length === 0) {
        setColors(colorData);
      }
      return colorData;
    },
    {
      errorRetryCount: 0
    }
  );

  useEffect(() => {
    if (!rawColors) return;
    if (searchColor.length === 0) {
      setColors(rawColors);
      return;
    }
    // If not a valid color code then return
    if (!colord(searchColor).isValid()) return;

    // Sort colors only if color code is valid 
    const sortColors = [...rawColors];
    sortColors.sort((a, b) => {
      const aColorDistance = colorDistance(searchColor, a.hex);
      const bColorDistance = colorDistance(searchColor, b.hex);
      return aColorDistance > bColorDistance ? 1 : -1;
    });
    const top100Colors = sortColors.slice(0, 100);
    setColors(top100Colors);
  }, [searchColor, rawColors]);

  return (
    <div className="App">
      <h1>Color Searcher</h1>
      <Stack gap="3rem">
        <SearchBar disabled={!rawColors || error} color={color} setColor={setColor} />
        <ColorResults
          error={error}
          searchColor={searchColor}
          rawColors={rawColors}
          colors={colors}
        />
      </Stack>
    </div>
  );
};

export default App;
