import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import colors from '../assets/colors'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 2, backgroundColor: 'background.default' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: colors.serviceText }}>
            {title}
          </Typography>
          {price === "Free" ?
            <Typography variant="h5" sx={{ color: colors.serviceText }}>
              {price}
            </Typography>
            :
            <Typography variant="h5" sx={{ color: colors.serviceText }}>
              ${price}
            </Typography>
          }
        </Box>
      </CardContent>
      {description.length > 0 ?
        <CardActions
          disableSpacing
          onClick={handleExpandClick}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Typography variant="h6" sx={{ color: colors.serviceText, marginRight: 1, marginLeft: 1 }}>
            View Details
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ display: 'flex', alignItems: 'center', margin: 0 }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        :
        <></>
      }
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2, textAlign: 'left', color: 'primary' }}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ServiceCard;
