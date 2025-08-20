import React from 'react';

interface DivKitRendererProps {
  layout: any;
}

export const DivKitRenderer: React.FC<DivKitRendererProps> = ({ layout }) => {
  // 간단한 DivKit 렌더러 구현
  // 실제로는 @divkitframework/divkit 라이브러리를 사용
  
  const renderDiv = (div: any): React.ReactNode => {
    if (!div) return null;

    switch (div.type) {
      case 'text':
        return (
          <div
            style={{
              fontSize: div.font_size || 16,
              fontWeight: div.font_weight || 'normal',
              color: div.text_color || '#000',
              textAlign: div.text_alignment_horizontal || 'left',
              marginTop: div.margins?.top || 0,
              marginBottom: div.margins?.bottom || 0,
              marginLeft: div.margins?.left || 0,
              marginRight: div.margins?.right || 0,
              padding: div.paddings ? 
                `${div.paddings.top || 0}px ${div.paddings.right || 0}px ${div.paddings.bottom || 0}px ${div.paddings.left || 0}px` 
                : 0,
              backgroundColor: div.background?.[0]?.color || 'transparent',
              borderRadius: div.corner_radius || 0,
            }}
          >
            {div.text}
          </div>
        );

      case 'container':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: div.orientation === 'horizontal' ? 'row' : 'column',
              justifyContent: div.content_alignment_horizontal || 'flex-start',
              alignItems: div.content_alignment_vertical || 'flex-start',
              marginTop: div.margins?.top || div.margins?.all || 0,
              marginBottom: div.margins?.bottom || div.margins?.all || 0,
              marginLeft: div.margins?.left || div.margins?.all || 0,
              marginRight: div.margins?.right || div.margins?.all || 0,
              padding: div.paddings?.all || 0,
              backgroundColor: div.background?.[0]?.color || 'transparent',
              borderRadius: div.corner_radius || 0,
            }}
          >
            {div.items?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                {renderDiv(item)}
              </React.Fragment>
            ))}
          </div>
        );

      case 'image':
        return (
          <img
            src={div.image_url}
            alt=""
            style={{
              width: div.width?.value || 'auto',
              height: div.height?.value || 'auto',
              borderRadius: div.corner_radius || 0,
              objectFit: div.scale || 'cover',
            }}
          />
        );

      default:
        return <div>Unsupported type: {div.type}</div>;
    }
  };

  // DivKit 레이아웃 파싱
  const template = layout?.templates?.[Object.keys(layout.templates)[0]];
  const card = template?.card;
  const state = card?.states?.[0];
  const rootDiv = state?.div;

  return (
    <div className="divkit-renderer">
      {renderDiv(rootDiv)}
    </div>
  );
};