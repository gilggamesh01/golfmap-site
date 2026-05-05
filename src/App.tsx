import { useState } from 'react';
import { NavermapsProvider, Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';
import { regions, golfCourses } from './data';
import type { Region, GolfCourse } from './data';
import './App.css';

// TODO: Replace with your actual Client ID from Naver Cloud Platform
const NAVER_CLIENT_ID = ''; 

function App() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  const filteredCourses = selectedRegion.id === 'all' 
    ? golfCourses 
    : golfCourses.filter(course => course.region === selectedRegion.id);

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region);
    if (map) {
      map.setCenter(new naver.maps.LatLng(region.center.lat, region.center.lng));
      map.setZoom(region.zoom);
    }
  };

  const handleCourseClick = (course: GolfCourse) => {
    if (map) {
      map.setCenter(new naver.maps.LatLng(course.lat, course.lng));
      map.setZoom(14);
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h1>전국 골프 지도</h1>
        </header>
        
        <nav className="region-selector">
          {regions.map(region => (
            <button
              key={region.id}
              className={`region-button ${selectedRegion.id === region.id ? 'active' : ''}`}
              onClick={() => handleRegionSelect(region)}
            >
              {region.name}
            </button>
          ))}
        </nav>

        <section className="course-list">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div 
                key={course.id} 
                className="course-item"
                onClick={() => handleCourseClick(course)}
              >
                <div className="course-name">{course.name}</div>
                <div className="course-address">{course.address}</div>
              </div>
            ))
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              해당 지역에 등록된 골프장이 없습니다.
            </div>
          )}
        </section>
      </aside>

      <main className="map-container">
        {NAVER_CLIENT_ID ? (
          <NavermapsProvider ncpClientId={NAVER_CLIENT_ID}>
            <MapDiv style={{ width: '100%', height: '100%' }}>
              <NaverMap
                defaultCenter={new naver.maps.LatLng(selectedRegion.center.lat, selectedRegion.center.lng)}
                defaultZoom={selectedRegion.zoom}
                ref={setMap}
              >
                {filteredCourses.map(course => (
                  <Marker
                    key={course.id}
                    position={new naver.maps.LatLng(course.lat, course.lng)}
                    title={course.name}
                    onClick={() => handleCourseClick(course)}
                  />
                ))}
              </NaverMap>
            </MapDiv>
          </NavermapsProvider>
        ) : (
          <div className="placeholder-map">
            <div>
              <h2>Naver Maps Client ID가 필요합니다</h2>
              <p><code>src/App.tsx</code> 파일의 <code>NAVER_CLIENT_ID</code> 변수에 발급받으신 키를 입력해주세요.</p>
              <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>
                (ID 입력 전까지는 지도가 표시되지 않지만, 사이드바 레이아웃은 확인하실 수 있습니다.)
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
