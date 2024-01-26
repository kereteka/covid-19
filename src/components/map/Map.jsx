import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from 'react-simple-maps';
import { Link } from 'react-router-dom';

export default function Map() {
  return (
    <div className="xl:-mt-36">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.1} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.1} />
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Link to={'country/' + geo.id.toLowerCase()} key={geo.id}>
                <Geography
                  style={{
                    default: {
                      fill: '#d3c9cd',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                  key={geo.rsmKey}
                  geography={geo}
                />
              </Link>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
