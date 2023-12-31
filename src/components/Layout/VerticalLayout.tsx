
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))


const VerticalLayout = (props:any) => {
	const { hidden, settings, children, scrollToTop, footerProps, contentHeightFixed, verticalLayoutProps } = props
	const { skin, navHidden, contentWidth } = settings
	return (
		<>
		<VerticalLayoutWrapper className='layout-wrapper'>
			<MainContentWrapper sx={{ ...(contentHeightFixed && { maxHeight: '100vh' }) }} className='layout-content-wrapper'>
				<ContentWrapper
					className='layout-page-content'
					sx={{
						...(contentHeightFixed && {
							overflow: 'hidden',
							'& > :first-of-type': { height: '100%' }
						}),
						...(contentWidth === 'boxed' && {
							mx: 'auto',
							'@media (min-width:1440px)': { maxWidth: 1440 },
							'@media (min-width:1200px)': { maxWidth: '100%' }
						})
					}}
				>
					{children}
				</ContentWrapper>
				{/* <Footer footerStyles={footerProps?.sx} footerContent={footerProps?.content} {...props} /> */}
			</MainContentWrapper>
		</VerticalLayoutWrapper>
		</>
	)
}

export default VerticalLayout;
