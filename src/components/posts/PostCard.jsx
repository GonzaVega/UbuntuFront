import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { FormatParagraphs } from '@/utils/FormatParagraphs';
import CardContainer from '@/components/card/CardContainer';
import CardContent from '@/components/card/CardContent';
import CardImageSlider from '@/components/card/CardImageSlider';
import CardToggle from '@/components/card/CardToggle';

export default function PostCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mixins } = useTheme();
  const headerText = post.content.split('\n\n')[0];

  const sx = isExpanded ? mixins.cardExpanded : mixins.cardCollapsed;

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <CardContainer>
      <Typography variant='h3' align='center'>
        {post.title}
      </Typography>
      <Box display='flex' flexDirection='column' gap='1.5rem'>
        <Box>
          <CardImageSlider images={post.picture} />
        </Box>
        <Box display='flex' flexDirection='column' gap='0.5rem'>
          <CardContent
            header={Header({ date: post.date, text: headerText, sx })}
            content={FormatParagraphs({ content: post.content, from: 1 })}
            isExpanded={isExpanded}
          />
          <CardToggle isExpanded={isExpanded} onClick={handleClick} renderButton={Button} />
        </Box>
      </Box>
    </CardContainer>
  );
}

function Header({ date, text, sx }) {
  return (
    <Box display='flex' flexDirection='column' gap='0.25rem'>
      <Typography variant='body2' component='span' sx={{ fontWeight: 600 }}>
        {date}
      </Typography>
      <Typography component='p' variant='body1' sx={sx}>
        {text}
      </Typography>
    </Box>
  );
}

function Button(isExpanded) {
  return isExpanded ? (
    <Typography variant='body1' component='span'>
      Ver menos
    </Typography>
  ) : (
    <Typography variant='body1' component='span'>
      Ver más
    </Typography>
  );
}
