﻿using System;
using Stripe;
using Newtonsoft.Json;

namespace Hood.Events
{
    public class StripeWebHookTriggerArgs : EventArgs
    {
        public StripeWebHookTriggerArgs(string json)
        {
            StripeEvent = StripeEventUtility.ParseEvent(json);
            Json = json;
        }
        public StripeWebHookTriggerArgs(StripeEvent stripeEvent)
        {
            StripeEvent = stripeEvent;
            Json = JsonConvert.SerializeObject(stripeEvent);
        }
        public string Json { get; set; }
        public StripeEvent StripeEvent { get; set; }
    }
}