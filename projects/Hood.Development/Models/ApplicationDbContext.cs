﻿using System.Threading.Tasks;
using Hood.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Hood.Web
{
    public class ApplicationDbContext : HoodDbContext
    {
        public ApplicationDbContext(DbContextOptions<HoodDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public async override Task Seed()
        {
            await base.Seed();
        }
    }
}
