﻿using Hood.Enums;
using Hood.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;

namespace Hood.Extensions
{
    public static class HtmlHelperExtensions
    {
        public static IHtmlContent DescriptionFor<TModel, TValue>(this IHtmlHelper<TModel> html, Expression<Func<TModel, TValue>> expression)
        {
            if (html == null) throw new ArgumentNullException(nameof(html));
            if (expression == null) throw new ArgumentNullException(nameof(expression));

            var modelExplorer = ExpressionMetadataProvider.FromLambdaExpression(expression, html.ViewData, html.MetadataProvider);
            if (modelExplorer == null) throw new InvalidOperationException($"Failed to get model explorer for {ExpressionHelper.GetExpressionText(expression)}");
            return new HtmlString(string.Format("<a class='text-info description' data-toggle='popover' data-placement='left' data-content='{0}' title='{1}'><i class='fa fa-question-circle'></i></a>", WebUtility.HtmlEncode(modelExplorer.Metadata.Description), WebUtility.HtmlEncode(modelExplorer.Metadata.DisplayName)));
        }

        public static IHtmlContent DescriptionTextFor<TModel, TValue>(this IHtmlHelper<TModel> html, Expression<Func<TModel, TValue>> expression)
        {
            if (html == null) throw new ArgumentNullException(nameof(html));
            if (expression == null) throw new ArgumentNullException(nameof(expression));

            var modelExplorer = ExpressionMetadataProvider.FromLambdaExpression(expression, html.ViewData, html.MetadataProvider);
            if (modelExplorer == null) throw new InvalidOperationException($"Failed to get model explorer for {ExpressionHelper.GetExpressionText(expression)}");
            return new HtmlString(WebUtility.HtmlEncode(modelExplorer.Metadata.Description));
        }
        public static IHtmlContent ContentCategoryTree(this IHtmlHelper html, IEnumerable<ContentCategory> categories, string contentSlug)
        {
            string htmlOutput = string.Empty;

            if (categories != null && categories.Count() > 0)
            {
                htmlOutput += "<ul>";
                foreach (var category in categories)
                {
                    htmlOutput += "<li>";
                    htmlOutput += string.Format("<a href=\"/{0}/category/{1}/\" class=\"content-category\">", contentSlug, category.Slug);
                    htmlOutput += string.Format("{0} <span>{1}</span>", category.DisplayName, category.Count);
                    htmlOutput += "</a>";
                    htmlOutput += html.ContentCategoryTree(category.Children, contentSlug);
                    htmlOutput += "</li>";
                }
                htmlOutput += "</ul>";
            }

            return html.Raw(htmlOutput);
        }

        public static IHtmlContent CategorySelectOptions(this IHtmlHelper html, IEnumerable<ContentCategory> categories, bool useSlug = false, int startingLevel = 0)
        {
            string htmlOutput = string.Empty;
            if (categories != null && categories.Count() > 0)
            {
                foreach (var category in categories)
                {
                    if (useSlug)
                        htmlOutput += "<option value=\"" + category.Slug + "\">";
                    else
                        htmlOutput += "<option value=\"" + category.Id + "\">";
                    for (int i = 0; i < startingLevel; i++)
                    {
                        htmlOutput += "- ";
                    }
                    htmlOutput += string.Format("{0} ({1})", category.DisplayName, category.Count);
                    htmlOutput += "</option>";
                    htmlOutput += html.CategorySelectOptions(category.Children, useSlug, startingLevel + 1);
                }
            }
            return html.Raw(htmlOutput);
        }

        public static IHtmlContent AdminContentCategoryTree(this IHtmlHelper html, IEnumerable<ContentCategory> categories, string contentSlug, int startingLevel = 0)
        {
            string htmlOutput = string.Empty;

            if (categories != null && categories.Count() > 0)
            {
                foreach (var category in categories)
                {
                    htmlOutput += "<tr>";
                    htmlOutput += "<td>";
                    for (int i = 0; i < startingLevel; i++)
                    {
                        htmlOutput += "<i class=\"fa fa-caret-right m-r-sm\"></i> ";
                    }
                    htmlOutput += string.Format("<a href=\"/{0}/category/{1}/\" class=\"content-category\">", contentSlug, category.Slug);
                    htmlOutput += string.Format("{0} <span>({1})</span>", category.DisplayName, category.Count);
                    htmlOutput += "</a>";
                    htmlOutput += " <small>[" + category.Slug + "]</small>";
                    htmlOutput += "</td>";
                    htmlOutput += "<td class='text-right'>";
                    htmlOutput += string.Format("<a class=\"btn btn-sm btn-warning m-l-sm edit-category action-button\" data-id=\"{0}\" data-type=\"{1}\"><i class=\"fa fa-edit\"></i><span>&nbsp;Edit</span></a>", category.Id, category.ContentType);
                    htmlOutput += string.Format("<a class=\"btn btn-sm btn-danger m-l-xs delete-category action-button\" data-id=\"{0}\"><i class=\"fa fa-trash\"></i><span>&nbsp;Delete</span></a>", category.Id);
                    htmlOutput += "</td>";
                    htmlOutput += html.AdminContentCategoryTree(category.Children, contentSlug, startingLevel + 1);
                    htmlOutput += "</tr>";
                }
            }

            return html.Raw(htmlOutput);
        }


        public static IHtmlContent AddToCategoryTree(this IHtmlHelper html, IEnumerable<ContentCategory> categories, Content content, string contentSlug, int startingLevel = 0)
        {
            string htmlOutput = string.Empty;

            if (categories != null && categories.Count() > 0)
            {
                foreach (var category in categories)
                {
                    
                    htmlOutput += "<div class=\"checkbox\">";
                    for (int i = 0; i < startingLevel; i++)
                    {
                        htmlOutput += "<i class=\"fa fa-caret-right m-r-sm\"></i> ";
                    }
                    htmlOutput += string.Format("<input class=\"styled category-check\" id=\"category-check-{1}\" name=\"category-check-{1}\" type=\"checkbox\" data-id=\"{0}\" value=\"{1}\" {2}>", content.Id, category.Id, content.IsInCategory(category.Id) ? "checked" : "");
                    htmlOutput += string.Format("<label for=\"category-check-{1}\">{0}</label>", category.DisplayName, category.Id);
                    htmlOutput += "</div>";
                    htmlOutput += html.AddToCategoryTree(category.Children, content, contentSlug, startingLevel + 1);
                }
            }

            return html.Raw(htmlOutput);
        }

        public static IHtmlContent BootstrapAlert(this IHtmlHelper html, string message, AlertType type, bool autoDismiss = true)
        {
            if (!message.IsSet())
                return null;

            switch (type)
            {
                case AlertType.Success:
                    return html.Raw(string.Format("<div class='alert alert-success {1}'><i class='fa fa-thumbs-up m-r-sm'></i>{0}</div>", message, autoDismiss ? "auto-dismiss" : ""));
                case AlertType.Warning:
                    return html.Raw(string.Format("<div class='alert alert-warning {1}'><i class='fa fa-exclamation-triangle m-r-sm'></i>{0}</div>", message, autoDismiss ? "auto-dismiss" : ""));
                case AlertType.Danger:
                    return html.Raw(string.Format("<div class='alert alert-danger {1}'><i class='fa fa-exclamation-triangle m-r-sm'></i>{0}</div>", message, autoDismiss ? "auto-dismiss" : ""));
                case AlertType.Info:
                default:
                    return html.Raw(string.Format("<div class='alert alert-info {1}'><i class='fa fa-info-circle m-r-sm'></i>{0}</div>", message, autoDismiss ? "auto-dismiss" : ""));
            }

        }

    }
}
