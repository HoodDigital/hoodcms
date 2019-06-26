﻿using Hood.Enums;
using Hood.Extensions;
using Hood.Models;
using Hood.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;

namespace Hood.Filters
{
    /// <summary>
    /// This will first check that subscriptions, stripe etc are all enabled and installed correctly, it will then run a user check, and save the subscription info into the context pipeline in Items["AccountInfo"]
    /// </summary>
    public class StripeAccountRequiredAttribute : TypeFilterAttribute
    {
        /// <summary>
        /// This will first check that subscriptions, stripe etc are all enabled and installed correctly, it will then run a user check, and save the subscription info into the context pipeline in Items["AccountInfo"]
        /// </summary>
        /// <param name="id">The Ids of the subscription which you are checking for.</param>
        public StripeAccountRequiredAttribute() : base(typeof(StripeAccountRequiredAttributeImpl))
        {
        }

        private class StripeAccountRequiredAttributeImpl : IActionFilter
        {
            private readonly IBillingService _billing;
            private readonly UserManager<ApplicationUser> _userManager;

            public StripeAccountRequiredAttributeImpl(
                IBillingService billing,
                UserManager<ApplicationUser> userManager)
            {
                _billing = billing;
                _userManager = userManager;
            }

            public void OnActionExecuting(ActionExecutingContext context)
            {
                if (Core.Engine.Settings.Billing.CheckBilling)
                {
                    var user = _userManager.GetUserAsync(context.HttpContext.User).Result;

                    if (!user.StripeId.IsSet())
                    {
                        context.Result = new RedirectToActionResult("Index", "Billing", new { message = BillingMessage.NoStripeId });
                        return;
                    }

                    var customer = _billing.Customers.FindByIdAsync(user.StripeId).Result;

                    if (customer == null)
                    {
                        context.Result = new RedirectToActionResult("Index", "Billing", new { message = BillingMessage.NoCustomerObject });
                        return;
                    }
                }
            }

            public void OnActionExecuted(ActionExecutedContext context)
            {
            }
        }
    }
}
