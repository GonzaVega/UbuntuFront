import PostCard from '@/pages/landing/components/PostCard';
import { Box, Button, Grid, Typography } from '@mui/material';

const posts = [
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [
      'https://s3-alpha-sig.figma.com/img/57e0/9c01/bc0a8122803965b8431a7b679a4b6231?Expires=1700438400&Signature=jOzxETY8XMR9g4SMDwGBROYDXJQ08GN2vrCv~GYpChzDBCV5~inQ5ZJJ6PDeIt~FjjNGauYWFePSsb42nIoSvutDTolYGYSvk8ihtbBcMmEr-UKhPpAeS-BkWKBc6iga7iP0hGJmubk50U51ofTzB3DLouBAscDFPFiB0l0Q13Sif7Ou-MBpupy4a6iY~u9ZpgFUDAvW8Xr0W4oPJPa3IGtQKiNePJ7dI8MhJYgCpEWLXLnlieYT5~BeWuYudf1w0HFxQVRgBOhUsK1yOTsufdoqa~kqiRWGgSLLQQsxCKnnWiC0ZuamQQfZ6L8fdcv9iojsmO4dIfDfWA8~7CEFEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/6721/9a96/84077892f8e4afb3a4d2ef8650efd9ea?Expires=1700438400&Signature=YdvVTspxkJjGomX-oeGZUWOE58Iz08rIYkfgdAu0k1-djK11gkFt1AUHcjXbkWa3gj1NxIrimdHnVgR0lYHBeSBZaBS~gtF5J3xWYilTgio3AcwgEuR-e3euVWpkBMnLIvdcSTRZcPwOwdoJLasEGwwAEJc5x-eLqveexI8H1g-Vt8OC-wRyLeGOWZbmdPrjlsYmQA23oMVcDjPvPQUGVws7lCUa2s8WZziAT~QV1FHj1aG2IsHkXE5BHEpYwojlKhOlQLC14Nju6ZdaBEZwjhoN0rbvHGbZ1BhTquBYHRiorXkK3xVOpJAVCfH7Gbw97MlhGhanISNb6uLqWorMLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/c9ac/89fb/84728f71b323de55789700d29df552a3?Expires=1700438400&Signature=TyjQVYuv6c7YzDUGQ9757EQG0gIhUzPbjxX2HqdyFZj-d8fl5AedQePPDiAdwuMViSkQKbSu8iRFHubOaIe0rp3c0L9j0dDcc6~2qH6mwqBFCn97PM8zrzZMDzwpuWobuTSZhmLm1t-pLI5i0IJtmxw89yasQW-JtVxeCQfm0l2FbeqYzhIy12P4UXirEmFz~CkEm0Uo~o6WGOLLPY1uBB04sNjaVfr3TjZQiT2io5vq51T83f0-SBoH0lvbaP7NApsrJH57yBL6pRRRf9eQRvBRb8yDUdENkKOWbImbdpxta~-pEL~-g-QwrmMm873CfxgX1OdWIiRmzjETO0aTVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [
      'https://s3-alpha-sig.figma.com/img/57e0/9c01/bc0a8122803965b8431a7b679a4b6231?Expires=1700438400&Signature=jOzxETY8XMR9g4SMDwGBROYDXJQ08GN2vrCv~GYpChzDBCV5~inQ5ZJJ6PDeIt~FjjNGauYWFePSsb42nIoSvutDTolYGYSvk8ihtbBcMmEr-UKhPpAeS-BkWKBc6iga7iP0hGJmubk50U51ofTzB3DLouBAscDFPFiB0l0Q13Sif7Ou-MBpupy4a6iY~u9ZpgFUDAvW8Xr0W4oPJPa3IGtQKiNePJ7dI8MhJYgCpEWLXLnlieYT5~BeWuYudf1w0HFxQVRgBOhUsK1yOTsufdoqa~kqiRWGgSLLQQsxCKnnWiC0ZuamQQfZ6L8fdcv9iojsmO4dIfDfWA8~7CEFEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/6721/9a96/84077892f8e4afb3a4d2ef8650efd9ea?Expires=1700438400&Signature=YdvVTspxkJjGomX-oeGZUWOE58Iz08rIYkfgdAu0k1-djK11gkFt1AUHcjXbkWa3gj1NxIrimdHnVgR0lYHBeSBZaBS~gtF5J3xWYilTgio3AcwgEuR-e3euVWpkBMnLIvdcSTRZcPwOwdoJLasEGwwAEJc5x-eLqveexI8H1g-Vt8OC-wRyLeGOWZbmdPrjlsYmQA23oMVcDjPvPQUGVws7lCUa2s8WZziAT~QV1FHj1aG2IsHkXE5BHEpYwojlKhOlQLC14Nju6ZdaBEZwjhoN0rbvHGbZ1BhTquBYHRiorXkK3xVOpJAVCfH7Gbw97MlhGhanISNb6uLqWorMLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/c9ac/89fb/84728f71b323de55789700d29df552a3?Expires=1700438400&Signature=TyjQVYuv6c7YzDUGQ9757EQG0gIhUzPbjxX2HqdyFZj-d8fl5AedQePPDiAdwuMViSkQKbSu8iRFHubOaIe0rp3c0L9j0dDcc6~2qH6mwqBFCn97PM8zrzZMDzwpuWobuTSZhmLm1t-pLI5i0IJtmxw89yasQW-JtVxeCQfm0l2FbeqYzhIy12P4UXirEmFz~CkEm0Uo~o6WGOLLPY1uBB04sNjaVfr3TjZQiT2io5vq51T83f0-SBoH0lvbaP7NApsrJH57yBL6pRRRf9eQRvBRb8yDUdENkKOWbImbdpxta~-pEL~-g-QwrmMm873CfxgX1OdWIiRmzjETO0aTVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
  {
    title: 'Inversiones Éticas: Más que ganancias',
    picture: [
      'https://s3-alpha-sig.figma.com/img/57e0/9c01/bc0a8122803965b8431a7b679a4b6231?Expires=1700438400&Signature=jOzxETY8XMR9g4SMDwGBROYDXJQ08GN2vrCv~GYpChzDBCV5~inQ5ZJJ6PDeIt~FjjNGauYWFePSsb42nIoSvutDTolYGYSvk8ihtbBcMmEr-UKhPpAeS-BkWKBc6iga7iP0hGJmubk50U51ofTzB3DLouBAscDFPFiB0l0Q13Sif7Ou-MBpupy4a6iY~u9ZpgFUDAvW8Xr0W4oPJPa3IGtQKiNePJ7dI8MhJYgCpEWLXLnlieYT5~BeWuYudf1w0HFxQVRgBOhUsK1yOTsufdoqa~kqiRWGgSLLQQsxCKnnWiC0ZuamQQfZ6L8fdcv9iojsmO4dIfDfWA8~7CEFEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/6721/9a96/84077892f8e4afb3a4d2ef8650efd9ea?Expires=1700438400&Signature=YdvVTspxkJjGomX-oeGZUWOE58Iz08rIYkfgdAu0k1-djK11gkFt1AUHcjXbkWa3gj1NxIrimdHnVgR0lYHBeSBZaBS~gtF5J3xWYilTgio3AcwgEuR-e3euVWpkBMnLIvdcSTRZcPwOwdoJLasEGwwAEJc5x-eLqveexI8H1g-Vt8OC-wRyLeGOWZbmdPrjlsYmQA23oMVcDjPvPQUGVws7lCUa2s8WZziAT~QV1FHj1aG2IsHkXE5BHEpYwojlKhOlQLC14Nju6ZdaBEZwjhoN0rbvHGbZ1BhTquBYHRiorXkK3xVOpJAVCfH7Gbw97MlhGhanISNb6uLqWorMLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      'https://s3-alpha-sig.figma.com/img/c9ac/89fb/84728f71b323de55789700d29df552a3?Expires=1700438400&Signature=TyjQVYuv6c7YzDUGQ9757EQG0gIhUzPbjxX2HqdyFZj-d8fl5AedQePPDiAdwuMViSkQKbSu8iRFHubOaIe0rp3c0L9j0dDcc6~2qH6mwqBFCn97PM8zrzZMDzwpuWobuTSZhmLm1t-pLI5i0IJtmxw89yasQW-JtVxeCQfm0l2FbeqYzhIy12P4UXirEmFz~CkEm0Uo~o6WGOLLPY1uBB04sNjaVfr3TjZQiT2io5vq51T83f0-SBoH0lvbaP7NApsrJH57yBL6pRRRf9eQRvBRb8yDUdENkKOWbImbdpxta~-pEL~-g-QwrmMm873CfxgX1OdWIiRmzjETO0aTVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    ],
    date: '17/04/2023',
    content:
      'Las decisiones financieras han trascendido la mera maximización del rendimiento. Actualmente, muchos inversores desean que sus decisiones reflejen sus valores éticos y morales, dando lugar a las inversiones éticas o sostenibles.\n\nEstas no solo evitan sectores polémicos como el tabaco o las armas; buscan respaldar empresas y proyectos que beneficien positivamente a la sociedad y al medio ambiente. Estas empresas suelen adherirse a altos estándares de responsabilidad social, considerando tanto a accionistas como a las comunidades en las que operan.\n\nEl atractivo de las inversiones éticas radica en la posibilidad de generar un impacto positivo con el dinero invertido. Apoyando a empresas pioneras en energías renovables, que fomentan la igualdad de género o que practican la equidad laboral, los inversores no solo buscan ganancias, sino también cambios beneficiosos en el mundo.\n\nContrario a lo que algunos podrían pensar, las inversiones éticas pueden ofrecer rendimientos competitivos. La demanda de soluciones sostenibles está en aumento, y las empresas que lideran en este ámbito suelen tener una ventaja competitiva a largo plazo.\n\nNo obstante, es esencial investigar adecuadamente. No todas las empresas que se promocionan como "sostenibles" cumplen con estos criterios. Certificaciones, como los Principios de Inversión Responsable de las Naciones Unidas, son útiles para discernir el compromiso real de una empresa con la sostenibilidad.\n\nEn conclusión, las inversiones éticas ofrecen la oportunidad de unir capital y valores. Al buscar un impacto positivo más allá de los rendimientos, contribuimos a un futuro más equitativo y sostenible.',
  },
];

export default function Posts() {
  return (
    <Grid container component='section' mt='3rem'>
      <Grid item xs={12}>
        <Box textAlign='center'>
          <Typography variant='h2' component='span' sx={{ fontSize: '1rem' }}>
            Publicaciones
          </Typography>
          <Typography variant='h2' component='h2'>
            Finanzas con impacto
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt='2rem'>
        <Grid container rowSpacing={2}>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} mt='1.5rem'>
        <Box display='flex' justifyContent='center'>
          <Button
            variant='contained'
            sx={{
              lineHeight: '1.25rem',
              padding: '0.625rem 1.89rem',
              textTransform: 'none',
            }}
            disableElevation
          >
            Ir a Publicaciones
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
