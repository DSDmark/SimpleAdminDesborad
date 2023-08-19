// route
import { RouterLink } from '@/components'

// @mui
import { Button, Typography, Container, Box } from '@mui/material'

// styled
import { ContentStyle } from '../style'

// hook
import { useSiteTitle } from '@/hooks'

const NotFountPage = () => {
  useSiteTitle('404 Page Not Found')
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      <ContentStyle>
        <Typography variant='h3' paragraph>
          Sorry, page not found!
        </Typography>
        <Typography color='text.secondary'>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <Box
          component='img'
          src='/assets/illustrations/illustration_404.svg'
          sx={{
            height: 360,
            mx: 'auto',
            my: { xs: 5, sm: 10 },
          }}
        />
        <Button
          variant='contained'
          size='large'
          component={RouterLink}
          to='/dasboard/detail-penal'>
          go to home
        </Button>
      </ContentStyle>
    </Container>
  )
}

export default NotFountPage
