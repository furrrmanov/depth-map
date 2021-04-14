import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Line } from 'react-chartjs-2'

import { makeStyles } from '@material-ui/core/styles'

import CreatePointPopup from 'components/blocks/CreatePointPopup'
import Modal from 'components/blocks/Modal'
import { ROUT_FOR_LANDING_PAGE } from 'constants.js'

import { Wrapper, ButtonContainer, ChartsContainer, Button } from './styles'

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: '10px',
  },
  charts: {
    height: 'calc(100vh - 200px)',
  },
}))

export default function Charts() {
  const classes = useStyles()
  const history = useHistory()
  const params = new URLSearchParams(useLocation().search).get('id')
  const [openModal, setOpenModal] = useState(false)
  const [turnovers, setTurnovers] = useState([])
  const [depth, setDepth] = useState([])
  const pointsList = useSelector((state) => state.charts.data).find(
    (item) => item.id === params
  )

  const handleClickMenu = () => {
    history.push(ROUT_FOR_LANDING_PAGE)
  }

  const handleClickAddPoint = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    pointsList.points?.sort((a, b) => b.turnovers - a.turnovers)
    setTurnovers(pointsList.points?.map((item) => item.turnovers))
    setDepth(pointsList.points?.map((item) => item.time))
  }, [pointsList])

  const chartData = {
    labels: turnovers,
    datasets: [
      {
        fill: 'start',
        lineTension: 0.1,
        backgroundColor: '#FFCF78',
        borderColor: 'FCC156',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'FFA809',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'FFA809',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: depth,
      },
    ],
  }

  return (
    <Wrapper>
      <ButtonContainer>
        <Button variant="contained" color="primary" onClick={handleClickMenu}>
          Меню
        </Button>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickAddPoint}>
            Точка
          </Button>
        </div>
      </ButtonContainer>
      <ChartsContainer className={classes.charts}>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    reverse: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    reverse: true,
                  },
                },
              ],
            },
          }}
          height={400}
          width={600}
        />
      </ChartsContainer>
      <Modal open={openModal}>
        <CreatePointPopup
          callback={{
            closeModal: closeModal,
          }}
          chartsId={params}
        />
      </Modal>
    </Wrapper>
  )
}
