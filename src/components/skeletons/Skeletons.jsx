import ContentLoader from 'react-content-loader';

export const CategorySceleton = (props) => (
  <ContentLoader
    speed={2}
    width={50}
    height={14}
    viewBox="0 0 50 14"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="188" height="82" />
    <rect x="169" y="368" rx="0" ry="0" width="53" height="2" />
  </ContentLoader>
);

export const PostSceleton = (props) => (
  <ContentLoader
    width={450}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
    <rect x="42" y="77" rx="10" ry="10" width="360" height="260" />
  </ContentLoader>
);
