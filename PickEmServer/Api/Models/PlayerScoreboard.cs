﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickEmServer.Api.Models
{
    public class PlayerScoreboard
    {
        public List<GameScoreboard> GamePickScoreboards { get; internal set; }
    }
}
