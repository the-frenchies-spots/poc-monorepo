import React, { Fragment, useEffect, useRef } from "react";
import { Badge, Box, Card, Grid, Group, Stack, Text } from "@jf/material";
import { calandar } from "../../assets/calandar";
import { JapanLocation, japanData } from "../../assets/japanData";

interface DateDivsProps {
  startDate: Date;
  endDate: Date;
  onLocationChange: (data: JapanLocation) => void;
}

const DateDivs: React.FC<DateDivsProps> = ({
  startDate,
  endDate,
  onLocationChange,
}) => {
  const dateContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const currentDate = new Date();
    // const todayDiv = dateContainerRef.current?.querySelector(
    //   `[data-date="${currentDate.getDate()}"]`
    // );
    // if (todayDiv) {
    //   todayDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    // }
  }, [startDate, endDate]); // Mettre à jour l'effet lorsque les dates changent

  const renderDateDivs = () => {
    const divs: JSX.Element[] = [];

    const currentDate = new Date(startDate);
    const today = new Date(); // Obtient la date actuelle

    while (currentDate <= endDate) {
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("fr-FR", { month: "long" });
      const dateString = `${day} ${month}`;

      const isToday =
        currentDate.getFullYear() === today.getFullYear() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getDate() === today.getDate();

      const findDate = calandar.filter((currDate) => {
        return (
          currentDate.getFullYear() === currDate.date.getFullYear() &&
          currentDate.getMonth() === currDate.date.getMonth() &&
          currentDate.getDate() === currDate.date.getDate()
        );
      });

      divs.push(
        <Grid.Col xs={6} md={4} key={dateString} sx={{ width: "100%" }}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            ref={isToday ? dateContainerRef : null}
            data-date={currentDate.getDate()}
            sx={{ borderRadius: 8, border: "1px solid" }}
            p="md"
          >
            <Box
              sx={{
                width: "fit-content",
                borderRadius: 8,
                p: "md",
                backgroundColor: isToday ? "#46abe9" : "white",
                border: isToday ? "2px solid #60636e" : "none",
                fontWeight: isToday ? "bold" : undefined,
                color: isToday ? "#ffffff" : "black",
                textShadow: isToday
                  ? "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                  : undefined,
              }}
              p="xs"
            >
              {dateString}
            </Box>

            <Group position="apart" mt="md" mb="xs">
              {findDate &&
                findDate.map((thisFindDate) =>
                  thisFindDate?.list?.map((id, _idxx) => {
                    const theData = japanData.find((jd) => jd.id === id);
                    if (!theData) return null;
                    return (
                      <Stack
                        key={_idxx}
                        sx={{ border: "1px solid", borderRadius: 8 }}
                        p="xs"
                        onClick={() => onLocationChange(theData)}
                      >
                        <Badge color="pink" variant="light">
                          {theData.tag}
                        </Badge>
                        <Badge color="pink" variant="light">
                          {theData.city}
                        </Badge>
                      </Stack>
                    );
                  })
                )}
            </Group>
          </Card>
        </Grid.Col>
      );

      // Ajouter 1 jour à la date courante
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return divs;
  };

  return (
    <Grid grow ref={dateContainerRef}>
      {renderDateDivs()}
    </Grid>
  );
};
interface CalendarProps {
  onLocationChange: (data: JapanLocation) => void;
}

const Calendar = (props: CalendarProps) => {
  const { onLocationChange } = props;
  const startDate = new Date("2023-07-15");
  const endDate = new Date("2023-11-23");
  return (
    <DateDivs
      startDate={startDate}
      endDate={endDate}
      onLocationChange={onLocationChange}
    />
  );
};

export default Calendar;
